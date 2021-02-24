import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiPanel } from '@elastic/eui';
import Section from './Section';

const App = () => (
  <EuiFlexGroup>
    <EuiFlexItem grow={4}>
      <EuiPanel>
        <h1>hello world</h1>
      </EuiPanel>
    </EuiFlexItem>
    <EuiFlexItem grow={6}>
      <EuiFlexGroup direction="column" gutterSize="xl">
        {Array.from(Array(3).keys()).map((i, index) => (
          <EuiFlexItem key={index}>
            <Section />
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default App;
