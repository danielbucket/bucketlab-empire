import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
`;

export const DropdownButton = styled.button`
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
  min-width: 340px;
  max-height: 600px;
  overflow-y: auto;
  z-index: 1000;

  @media (max-width: 500px) {
    min-width: 280px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #667eea;
    border-radius: 3px;

    &:hover {
      background: #764ba2;
    }
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid #f0f0f0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
  border-radius: 8px 8px 0 0;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #2c3e50;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #999;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    transform: scale(1.1);
  }
`;

export const PermissionsListSection = styled.div`
  padding: 1rem;
  max-height: 300px;
  overflow-y: auto;

  h4 {
    margin: 0 0 0.75rem 0;
    font-size: 0.9rem;
    font-weight: 700;
    color: #667eea;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 3px;

    &:hover {
      background: #667eea;
    }
  }
`;

export const PermissionItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0.75rem;
  margin-bottom: 0.5rem;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    background: #f0f2f5;
  }
`;

export const PermissionName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
  font-family: 'Courier New', monospace;
  flex: 1;
`;

export const PermissionToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PermissionToggleOn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
  color: white;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(40, 167, 69, 0.3);
`;

export const PermissionToggleOff = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #e9ecef;
  color: #999;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const GrantedBadge = styled.span`
  display: inline-block;
  padding: 0.4rem 0.75rem;
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
`;

export const RequestedBadge = styled.span`
  display: inline-block;
  padding: 0.4rem 0.75rem;
  background: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
`;

export const PermissionStatusBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.6rem;
  background: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
`;

export const SectionDivider = styled.hr`
  margin: 1rem 0;
  border: none;
  border-top: 1px solid #e9ecef;
`;

export const RequestSection = styled.div`
  padding: 1rem;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  border-radius: 0 0 8px 8px;

  h4 {
    margin: 0 0 0.75rem 0;
    font-size: 0.9rem;
    font-weight: 700;
    color: #667eea;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  form {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

export const RequestInput = styled.input`
  flex: 1;
  min-width: 150px;
  padding: 0.6rem 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    background: #e9ecef;
    cursor: not-allowed;
  }
`;

export const RequestButton = styled.button`
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  white-space: nowrap;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.5);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const LoadingMessage = styled.div`
  padding: 1.5rem;
  text-align: center;
  color: #999;
  font-style: italic;
`;

export const NoPermissionsMessage = styled.div`
  padding: 1.5rem;
  text-align: center;
  color: #999;
  font-style: italic;
`;

