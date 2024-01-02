'use client';

export function DataTable({ data, columns }: { data: any[]; columns: string[] }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((c) => (
              <td key={c}>{item[c]}</td>
            ))}
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={columns.length}>pagination</td>
        </tr>
      </tfoot>
    </table>
  );
}
