import XFlow from './XFlow';
import withProvider from './withProvider';

import * as nodes from './nodes';
import FlowProps from './types';

export type { default as FR } from './types';

export { default as SourceHandle } from './components/CustomNode/sourceHandle';
export type { HandleProps as SourceHandleProps } from './components/CustomNode/sourceHandle';
export { FlowProvider } from './components/FlowProvider';
export { useEdges } from './hooks/useEdges';
export { useFlow } from './hooks/useFlow';
export { useNodes } from './hooks/useNodes';

export default withProvider<FlowProps>(XFlow, nodes);
