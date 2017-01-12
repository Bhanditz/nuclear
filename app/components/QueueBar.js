import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import styles from './QueueBar.css';

export default class QueueBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queuebarOpen: true
    };
  }



  render() {
    const contents = (
      <div>
        <table className="table table-hover table-condensed">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>

            {this.props.queue.map(function(song, i){
              var displayTitle = song.data.title;
              if (song.data.streamurlloading) {
                displayTitle=<i className="fa fa-spinner fa-spin fa-3x fa-fw queue-loading" />;
              }

              return (
                  <tr>
                    <td>{i+1}</td>
                    <td>{displayTitle}</td>
                    <td>{song.data.length}</td>
                  </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    );

    return (
      <div>
        <Sidebar
          sidebar={contents}
          open={this.state.queuebarOpen}
          docked={true}
          children=""
          sidebarClassName={styles.queuebar}
          pullRight={true}
        />
      </div>
    );

  }

}