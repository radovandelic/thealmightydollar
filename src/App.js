import React from 'react';
import recordVisit from "./containers/recordVisit"
import logo from './logo.svg';
import './App.css';

function App() {
  recordVisit("index")
  return (
    <div className="App">
      <header className="App-header">
        {/*  <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Lorem ipsum</h5>
            <h6 className="card-subtitle mb-2 text-muted">Placeholder</h6>
            <p className="card-text">

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in neque vulputate, bibendum ipsum eget, consequat lectus. In maximus felis velit, quis semper sapien semper a. Donec pellentesque auctor odio a fringilla. In tortor nibh, scelerisque eu vestibulum sit amet, sodales ut leo. Etiam dictum accumsan aliquam. Integer semper molestie orci sollicitudin interdum. Proin venenatis non ante at euismod. Mauris et tellus elit. Cras porttitor accumsan nulla non pulvinar. Ut bibendum sit amet elit et varius. Curabitur et blandit mi. Morbi id elit quam. Fusce ullamcorper consectetur leo, eget elementum augue dictum sit amet. Sed nibh nisi, maximus at elit vel, luctus eleifend odio. Aliquam eu neque elit. Phasellus euismod eros id auctor pretium.
              <br />
              Suspendisse potenti. Mauris tristique felis sit amet augue facilisis, ut volutpat tellus elementum. Aliquam diam lectus, laoreet non efficitur ut, tristique in lectus. Donec luctus aliquet rhoncus. Quisque dignissim eget ligula vel volutpat. Suspendisse cursus hendrerit nibh, at rhoncus purus luctus vitae. Nulla semper nunc dui, id ullamcorper arcu posuere nec. Donec varius tellus nec nibh porta malesuada. Pellentesque eu magna luctus, porta turpis non, consequat nunc. Mauris condimentum massa non lacinia tristique. Nunc mollis odio vulputate neque convallis eleifend. In hac habitasse platea dictumst. Ut pretium congue ante ut auctor.
              <br />
              <br />
              Morbi eu feugiat ipsum. Nunc sit amet ante et ante vulputate posuere. In sem dui, facilisis eget est eget, congue vestibulum elit. Nam commodo hendrerit eleifend. Aliquam nec diam dignissim, consectetur ipsum ac, tristique ex. Vivamus viverra vulputate sapien, eu iaculis diam lacinia et. Morbi nec iaculis odio, hendrerit scelerisque massa.
              <br />
              <br />
              Nulla sollicitudin, orci sit amet pharetra pretium, orci ex hendrerit leo, ut fermentum ligula nunc at dui. Cras sit amet auctor dolor. Vivamus ac metus libero. Fusce ipsum lacus, aliquet vel facilisis eget, elementum in odio. Mauris rhoncus dolor bibendum laoreet accumsan. Ut venenatis rutrum gravida. Cras aliquet, sapien eu tincidunt egestas, leo felis commodo quam, sit amet bibendum est ante sed sapien. Nulla laoreet feugiat elit, eget sagittis tellus pretium et. Aliquam erat volutpat. Nulla dignissim venenatis pretium. Quisque et ante sit amet sem vulputate cursus nec quis erat. Nullam accumsan scelerisque enim, sit amet dignissim eros sollicitudin eget. Vestibulum nibh nisl, aliquam et facilisis nec, dapibus sed turpis. Duis varius, turpis eget consequat sagittis, velit ligula viverra est, ac viverra ipsum mi ut metus.
              <br />
              <br />
              Duis gravida libero nec ante vehicula sollicitudin. Duis bibendum faucibus mauris. Etiam semper vitae dolor quis vehicula. Nullam quis mollis est. Cras quis euismod libero, id vehicula ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis ipsum massa, et interdum quam rhoncus vestibulum. </p>
          </div>
        </div>

      </header>
    </div >
  );
}

export default App;
