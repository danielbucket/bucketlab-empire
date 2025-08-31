import styled from 'styled-components';
import { LaboratoryLayout } from '../../style/laboratory.style.js';

export const ProfileLayout = styled(LaboratoryLayout)`
	background: linear-gradient(135deg, #232526 0%, #414345 100%);
	color: #00ffe7;
	font-family: 'Fira Mono', 'Roboto Mono', 'Menlo', monospace;
	box-shadow: 0 0 40px 0 #00ffe7, 0 0 8px 0 #232526 inset;
	border-radius: 16px;
	padding: 2rem 3rem;
	margin: 2rem auto;
	max-width: 600px;
  
	h1 {
		font-size: 2.2rem;
		font-weight: 700;
		letter-spacing: 2px;
		color: #00ffe7;
		text-shadow: 0 0 8px #00ffe7, 0 0 2px #232526;
		margin-bottom: 2rem;
		border-bottom: 2px solid #00ffe7;
		padding-bottom: 0.5rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		background: rgba(35,37,38,0.85);
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 0 16px #00ffe7 inset;
	}

	label {
		font-size: 1.1rem;
		color: #00ffe7;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
		font-family: inherit;
	}

	input {
		background: #181a1b;
		color: #00ffe7;
		border: 1px solid #00ffe7;
		border-radius: 6px;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		font-family: inherit;
		transition: box-shadow 0.2s;
		box-shadow: 0 0 8px #00ffe7 inset;
		outline: none;
	}
	input:focus {
		box-shadow: 0 0 16px #00ffe7, 0 0 8px #232526 inset;
		border-color: #00ffe7;
	}

	button {
		background: linear-gradient(90deg, #00ffe7 0%, #232526 100%);
		color: #232526;
		font-family: inherit;
		font-size: 1.1rem;
		font-weight: 700;
		border: none;
		border-radius: 8px;
		padding: 0.75rem 2rem;
		margin-top: 1rem;
		box-shadow: 0 0 16px #00ffe7;
		cursor: pointer;
		transition: background 0.2s, color 0.2s;
	}
	button:disabled {
		background: #232526;
		color: #00ffe7;
		opacity: 0.5;
		cursor: not-allowed;
	}

	.modal-overlay {
		position: fixed;
		top: 0; left: 0; right: 0; bottom: 0;
		background: rgba(0,0,0,0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
	}
	.modal-content {
		background: #232526;
		color: #00ffe7;
		border-radius: 12px;
		padding: 2rem 3rem;
		box-shadow: 0 0 32px #00ffe7;
		text-align: center;
		font-family: inherit;
	}
`;