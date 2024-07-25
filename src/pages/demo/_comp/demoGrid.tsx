import { Card, Col, Row, Tooltip } from "antd";
import styles from "./demoGrid.module.css";
import Link from '@docusaurus/Link'


const DemoGrid = ({ name, demos }) => {
  const colSpan = 24 / 3;
  return (
    // <>
    //   <Row gutter={[16, 16]}>
    //     <Col span={6}>col</Col>
    //     <Col span={6}>col</Col>
    //     <Col span={6}>col</Col>
    //     <Col span={6}>col</Col>

    //     <Col span={6}>col</Col>
    //     <Col span={6}>col</Col>
    //     <Col span={6}>col</Col>
    //     <Col span={6}>col</Col>
    //   </Row>

    //   <Row gutter={[16, 16]}>
    //     <Col span={6}>col</Col>
    //     <Col span={6}>col</Col>
    //     <Col span={6}>col</Col>
    //     <Col span={6}>col</Col>
    //   </Row>
    // </>
    <>
        <div className={styles.tabContentBox}>
          <h1>{name}</h1>
          {
            <Row key={name} gutter={[16, 16]}>
              {demos.map((item) => (
                <Col key={item.title} span={colSpan} className={styles.demoBox}>
                  <Card
                    title={item.title}
                    bordered={true}
                    className={styles.demoCard} // card的样式
                    style={{ height: 400, overflow: "hidden" }} //也可以这样写card的样式
                    classNames={{body: styles.demoCardBody,header:styles.demoCardHeader}} //card的body的样式
                    // styles={{ body: { height: "100%", overflowY: "auto" } }} // 也可以这样写card的body的样式
                  >
                    {/* {item.title} */}
                    <Link to={item.link}>{item.title}</Link>
                  </Card>
                </Col>
              ))}
            </Row>
          }
        </div>
    </>
  );
};

export default DemoGrid;
