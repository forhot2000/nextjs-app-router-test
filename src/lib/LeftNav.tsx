import { LeftNavMenu } from './LeftNavMenu';
import { dataProvider } from './dataProvider';

export async function LeftNav() {
  const { data: classesData } = await dataProvider.getCollections();
  return <LeftNavMenu classesData={classesData} />;
}
