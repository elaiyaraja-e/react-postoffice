import React from 'react';

const Loading = props => {
    return (
     <div class="ui active transition visible inverted dimmer">
      <div class="content">
        <div class="ui medium text loader">Loading...</div>
      </div>
     </div>
    );
}
export default Loading;