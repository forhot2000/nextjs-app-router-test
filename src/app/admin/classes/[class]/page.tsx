export default function Page({ params: { class: className } }: { params: { class: string } }) {
  return (
    <>
      <div>{className}</div>
      <div>data table</div>
    </>
  );
}
