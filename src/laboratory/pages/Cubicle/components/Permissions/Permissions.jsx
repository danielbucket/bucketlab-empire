import { useState, useEffect, useRef } from 'react';
import { API_URLS } from '../../../../../globals/global.urls.js';
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  MenuHeader,
  CloseButton,
  PermissionsListSection,
  PermissionItemRow,
  PermissionName,
  PermissionToggle,
  PermissionToggleOn,
  PermissionToggleOff,
  PermissionStatusBadge,
  GrantedBadge,
  RequestedBadge,
  RequestSection,
  RequestInput,
  RequestButton,
  LoadingMessage,
  NoPermissionsMessage,
  SectionDivider,
} from './permissions.styled.js';

const DEFAULT_PERMISSIONS = ['guest', 'read:profile', 'delete:profile', 'update:profile'];

export default function Permissions({ permissionsList, authToken }) {
  const [isOpen, setIsOpen] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [requestedPermissions, setRequestedPermissions] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [newPermissionRequest, setNewPermissionRequest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef(null);

  // Process and normalize permissions
  useEffect(() => {
    setIsLoading(true);
    if (permissionsList && permissionsList.length > 0) {
      const normalizedPerms = permissionsList.reduce((acc, perm) => {
        if (typeof perm === 'string') {
          acc.push(perm);
        } else if (typeof perm === 'object' && perm !== null && perm.name) {
          acc.push(perm.name);
        }
        return acc;
      }, []);
      setPermissions(normalizedPerms);
    }
    setIsLoading(false);
  }, [permissionsList]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleRequestPermission = async (e) => {
    e.preventDefault();
    if (!newPermissionRequest.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(API_URLS.permissions?.requestPermission, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({ permission: newPermissionRequest.trim() }),
      });

      if (response.ok) {
        setRequestedPermissions(prev => new Set(prev).add(newPermissionRequest.trim()));
        setNewPermissionRequest('');
      } else {
        console.error('Failed to request permission:', response.statusText);
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPermissionRequested = (perm) => requestedPermissions.has(perm);

  const grantedPerms = permissions.filter(p => DEFAULT_PERMISSIONS.includes(p));
  const additionalPerms = permissions.filter(p => !DEFAULT_PERMISSIONS.includes(p));

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        Permissions ({permissions.length})
      </DropdownButton>

      {isOpen && (
        <DropdownMenu>
          <MenuHeader>
            <h3>My Permissions</h3>
            <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>
          </MenuHeader>

          <PermissionsListSection>
            {isLoading ? (
              <LoadingMessage>Loading permissions...</LoadingMessage>
            ) : permissions.length > 0 ? (
              <>
                {/* Default Permissions */}
                {grantedPerms.length > 0 && (
                  <>
                    <h4>Default</h4>
                    {grantedPerms.map((perm) => (
                      <PermissionItemRow key={perm}>
                        <PermissionName>{perm}</PermissionName>
                        <PermissionToggle>
                          <PermissionToggleOn>✓</PermissionToggleOn>
                        </PermissionToggle>
                      </PermissionItemRow>
                    ))}
                  </>
                )}

                {/* Additional Permissions */}
                {additionalPerms.length > 0 && (
                  <>
                    {grantedPerms.length > 0 && <SectionDivider />}
                    <h4>Additional</h4>
                    {additionalPerms.map((perm) => (
                      <PermissionItemRow key={perm}>
                        <PermissionName>{perm}</PermissionName>
                        <div>
                          {isPermissionRequested(perm) ? (
                            <RequestedBadge>Requested</RequestedBadge>
                          ) : (
                            <PermissionToggle>
                              <PermissionToggleOn>✓</PermissionToggleOn>
                            </PermissionToggle>
                          )}
                        </div>
                      </PermissionItemRow>
                    ))}
                  </>
                )}
              </>
            ) : (
              <NoPermissionsMessage>No permissions found.</NoPermissionsMessage>
            )}
          </PermissionsListSection>

          <SectionDivider />

          {/* Request Permission Section */}
          <RequestSection>
            <h4>Request Permission</h4>
            <form onSubmit={handleRequestPermission}>
              <RequestInput
                type="text"
                placeholder="Permission name..."
                value={newPermissionRequest}
                onChange={(e) => setNewPermissionRequest(e.target.value)}
                disabled={isSubmitting}
              />
              <RequestButton type="submit" disabled={isSubmitting || !newPermissionRequest.trim()}>
                {isSubmitting ? 'Requesting...' : 'Request'}
              </RequestButton>
            </form>
          </RequestSection>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}