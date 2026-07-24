export interface SpecRow {
  parameter: string;
  value: string;
}

export function SpecsTable({ title, rows }: { title?: string, rows: SpecRow[] }) {
  return (
    <div className="specs-table-wrapper reveal">
      <table className="specs-table">
        {title && (
          <thead>
            <tr>
              <th colSpan={2}>{title}</th>
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.parameter}</td>
              <td>{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpecsTable;
