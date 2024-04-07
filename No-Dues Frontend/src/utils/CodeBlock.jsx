import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeBlock = () => {
  const code = `
function add(a, b) {
  return a + b;
}

console.log(add(1, 2)); // 3
`;

  return (
    <SyntaxHighlighter language="javascript">
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;