import React from 'react';
import '../../../styles/Collapse.scss'
import ReactTable from "react-table";
import {renderMachine, ScanStatus} from "./Helpers"


class T1222 extends React.Component {

  constructor(props) {
    super(props);
  }

  static getCommandColumns() {
    return ([{
      Header: "Permission modification commands",
      columns: [
        {Header: 'Machine', id: 'machine', accessor: x => renderMachine(x.machine), style: {'whiteSpace': 'unset'}},
        {Header: 'Command', id: 'command', accessor: x => x.command, style: {'whiteSpace': 'unset'}},
      ]
    }])
  };

  render() {
    return (
      <div>
        <div>{this.props.data.message}</div>
        <br/>
        {this.props.data.status === ScanStatus.USED ?
          <ReactTable
            columns={T1222.getCommandColumns()}
            data={this.props.data.commands}
            showPagination={false}
            defaultPageSize={this.props.data.commands.length}
          /> : ""}
      </div>
    );
  }
}

export default T1222;
