import React from "react";
import "./style.scss";
import { Table, Badge, Menu, Dropdown, Icon, Button } from "antd";

const menu = (
  <Menu>
    <Menu.Item>Add</Menu.Item>
    <Menu.Item>Reset</Menu.Item>
    <Menu.Item>Remove</Menu.Item>
    <Menu.Item>Recover</Menu.Item>
  </Menu>
);

export default class ResultTable extends React.Component {
  columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "VIN", dataIndex: "vin", key: "vin" },
    { title: "Phone Number", dataIndex: "number", key: "number" },
    { title: "Application Date", dataIndex: "date", key: "date" },
    { title: "4S Shop", dataIndex: "shop", key: "shop" },
    {
      title: "Operation",
      key: "operation",
      render: () => (
        <a href="javascript:;">
          <Dropdown overlay={menu}>
            <Button icon="down">More</Button>
          </Dropdown>
        </a>
      )
    }
  ];

  expandedRowRender = () => {
    const columns = [
      { title: "Share Key Name", dataIndex: "name", key: "name" },
      { title: "Authorization Date", dataIndex: "date", key: "date" },
      {
        title: "Status",
        key: "Key State",
        render: () => (
          <span>
            <Badge status="success" />Normal
          </span>
        )
      },
      { title: "Cut-Off Date", dataIndex: "upgradeNum", key: "upgradeNum" },
      {
        title: "Operation ",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <span className="table-operation">
            <Dropdown overlay={menu}>
              <a href="javascript:;">
                More <Icon type="down" />
              </a>
            </Dropdown>
          </span>
        )
      }
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: "2014-12-24 23:12:00",
        name: "This is share key name",
        upgradeNum: "2015-07-20 13:19:33"
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  datas() {
    const data = [];
    for (let i = 0; i < 50; ++i) {
      data.push({
        key: i,
        name: "Hank",
        id: "122833741954830033",
        vin: "ABDD341312512341251",
        number: "18780269188",
        date: "2018年04月23日 星期一",
        shop: "Ford 4S dealership"
      });
    }
    return data;
  }

  render() {
    return (
      <Table
        className="components-table-demo-nested"
        columns={this.columns}
        expandedRowRender={this.expandedRowRender}
        dataSource={this.datas()}
      />
    );
  }
}
