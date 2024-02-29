import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
          <img width={800} src="http://182.92.116.125:9000/iron-man/iron-man_1709105175328_2024-02-28_249.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin%2F20240228%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240228T072617Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7cdcc4b4e5d014079b3a8c54f4a6511232f157ecfdac37448f06f3bd7024337f" alt="minio"/>
      </div>
    </PageContainer>
  );
};

export default HomePage;
