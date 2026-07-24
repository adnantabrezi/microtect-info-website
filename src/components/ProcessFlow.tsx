export interface ProcessNode {
  title: string;
  desc: string;
}

export function ProcessFlow({ nodes }: { nodes: ProcessNode[] }) {
  return (
    <div className="process-flow">
      {nodes.map((node, i) => (
        <div className="process-node reveal" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
          <div className="process-icon">{i + 1}</div>
          <div className="process-text">
            <h4>{node.title}</h4>
            <p>{node.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProcessFlow;
