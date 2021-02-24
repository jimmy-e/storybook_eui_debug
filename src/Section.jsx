import React from 'react';
import { EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiPanel } from '@elastic/eui';

const Section = () => (
  <EuiFlexGroup direction="column" gutterSize="m">
    {Array.from(Array(5).keys()).map((i, index) => (
      <EuiFlexItem key={index}>
        <EuiFlexGroup direction="column" gutterSize="m">
          <EuiFlexItem>
            <EuiPanel>
              <EuiFlexGrid className="card" columns={2}>
                <h1>hello world</h1>
              </EuiFlexGrid>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
    ))}
  </EuiFlexGroup>
);

export default Section;
