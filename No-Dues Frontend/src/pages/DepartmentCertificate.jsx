import { useState } from 'react';
import { Button, Box, TextareaAutosize, ListItem, TextField } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

export default function DepartmentCertificate() {
	const [ code, setCode ] = useState('<div>Hello World</div>');
	const [ showCode, setShowCode ] = useState(true);

	const menuData = [
		{
			id: 1,
			name: 'Menu Item 1'
		},
		{
			id: 2,
			name: 'Menu Item 2'
		},
		{
			id: 3,
			name: 'Menu Item 3'
		}
	];

	const handleCodeChange = (event) => {
		setCode(event.target.value);
	};

	const toggleCodeView = () => {
		setShowCode(!showCode);
	};

	return (
		<div className="p-2 h-screen overflow-y-auto flex">
			<div className="flex w-5/6">
                <div className='border-2 w-full'>
					<div className="flex-1 justify-between items-center p-2">
						<Button
							className={`${showCode
								? 'bg-blue-500 text-white'
								: 'bg-white'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
							onClick={toggleCodeView}
						>
							Code
						</Button>

						<Button
							className={`${!showCode
								? 'bg-blue-500 text-white'
								: 'bg-white'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
							onClick={toggleCodeView}
						>
							Preview
						</Button>
					</div>
					<div className="">
						{showCode ? (
							<div className="flex flex-col h-full">
								<div className="flex-1 overflow-y-auto p-2">
									<TextField
										multiline
										fullWidth
										value={code}
										onChange={handleCodeChange}
										className="p-2 border border-gray-400 rounded mt-2 pretty"
										rows={24}
										style={{ width: '100%' }}
									/>
								</div>
							</div>
						) : (
							<ErrorBoundary FallbackComponent={() => <div>Invalid HTML</div>}>
								<div
									dangerouslySetInnerHTML={{ __html: code }}
									className="p-2 border border-gray-400 rounded mt-2 pretty"
								/>
							</ErrorBoundary>
						)}
					</div>
				</div>
			</div>
			<div className="flex flex-col w-1/6 p-2">
				<Box className="flex flex-col border border-gray-300 rounded-md pretty">
					{menuData.map((item) => (
						<ListItem
							key={item.id}
							className="flex items-center justify-center border-b border-gray-300 hover:bg-blue-100 pretty"
						>
							<span className="px-4 py-2 text-gray-700 text-sm font-medium">{item.name}</span>
						</ListItem>
					))}
				</Box>
			</div>
		</div>
	);
}
