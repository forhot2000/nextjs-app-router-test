import { DataTable } from '@/components/DataTable';
import { dataProvider } from '@/lib/dataProvider';

const columns = ['id', 'name'];

export default async function Page({ params: { class: className } }: { params: { class: string } }) {
  const { data } = await dataProvider.find(className);
  return (
    <>
      <div>admin / classes / {className}</div>
      <DataTable data={data} columns={columns} />
    </>
  );
}
