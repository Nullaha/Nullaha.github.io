
import { Col, Row, Tooltip } from 'antd';
import { ITodoItem, IGroupedTodos } from '/todoContent.ts';

const TodoGrid = ({groupedTodos}) => {
  const colSpan = 24/4;
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
      {
        Object.keys(groupedTodos).map(year => (
          <div key={year}>
            <h1>{year}</h1>
            {
              Object.keys(groupedTodos[year]).map(month => (
                <Row key={month} gutter={[16,16]}>
            {Object.keys(groupedTodos[year]).map((month) => (
              <Col key={month} span={6}>
                <h2>{month}</h2>
                <ul>
                  {groupedTodos[year][month].map((item, index) => (
                    <li key={index}>
                      {item.state === 'done' ? (
                        <>
                          <Tooltip placement="bottom" title={'完成时间: ' + item.doneTime}>
                            ✔
                          </Tooltip>
                          <Tooltip placement="right" title={'todo时间: ' + item.time}>
                            <del>{item.title}</del>
                          </Tooltip>
                        </>
                      ) : (
                        <Tooltip placement="right" title={'todo时间: ' + item.time}>
                          {item.title}
                        </Tooltip>
                      )}
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
                </Row>
              ))
            }
          </div>
        ))
      }
    </>
  );
}


export default TodoGrid;