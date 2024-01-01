import { delay } from '@/lib/delay';

export default async function Page() {
  const label = await getData();
  return (
    <div>
      <div>{label} - empty</div>
      <div>@{new Date().toISOString()}</div>
    </div>
  );
}

async function getData() {
  await delay(100);
  return 'accordion-menu';
}
