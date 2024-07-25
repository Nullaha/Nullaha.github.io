import { Card, Col, Row, Tooltip } from "antd";
import { ITodoItem, IGroupedTodos } from "../_config/todoContent";
import styles from "./todoGrid.module.css";

const TodoItem = ({item}) => {

  return (
    <li>
      {item.state === "done" ? (
        <>
          <Tooltip
            placement="bottom"
            title={"完成时间: " + item.doneTime}
          >
            ✔
          </Tooltip>
          <Tooltip
            placement="right"
            title={"todo时间: " + item.time}
          >
            <del>{item.title}</del>
          </Tooltip>
        </>
      ) : (
        <Tooltip
          placement="right"
          title={"todo时间: " + item.time}
        >
          {item.title}
        </Tooltip>
      )}
      {item.children && item.children.length > 0 && (
        <ol>
          {item.children.map((child, index) => (
            <TodoItem key={index} item={child} />
          ))}
        </ol>
      )}
    </li>
  )
}

const TodoGrid = ({ groupedTodos }) => {
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
      {Object.keys(groupedTodos).map((year) => (
        <div key={year} className={styles.yearBox}>
          {/* <h1>{year}</h1> */}
          {
            <Row key={year} gutter={[16, 16]}>
              {Object.keys(groupedTodos[year]).map((month) => (
                <Col key={month} span={colSpan} className={styles.monthBox}>
                  <Card
                    title={month}
                    bordered={true}
                    className={styles.todoCard} // card的样式
                    style={{ height: 400, overflow: "hidden" }} //也可以这样写card的样式
                    classNames={{body: styles.todoCardBody}} //card的body的样式
                    // styles={{ body: { height: "100%", overflowY: "auto" } }} // 也可以这样写card的body的样式
                  >
                    <ol>
                      {groupedTodos[year][month].map((item, index) => (
                        <TodoItem key={index} item={item} />
                        // <li key={index}>{item.title}</li>
                      ))}
                    </ol>
                  </Card>
                </Col>
              ))}
            </Row>
          }
        </div>
      ))}
    </>
  );
};

export default TodoGrid;
