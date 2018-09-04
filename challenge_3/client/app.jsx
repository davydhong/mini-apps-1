class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0,
      tempID: ''
    };
    this.handleNextFields = this.handleNextFields.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }
  // this handle pertains to the inital page
  handleCheckOut() {
    this.setState({ view: 1 });
  }
  // this handle pertains to the F1, and F2 pages
  handleNextFields(event) {
    postViaAxios.call(this, event, response => {
      this.setState({ view: this.state.view + 1 });
      if (!!response.data) this.setState({ tempID: response.data });
    });
  }
  // this handle pertains to F3 page, returns to F0
  handleFinish(event) {
    postViaAxios.call(this, event, response => {
      this.setState({ tempID: '', view: 0 });
    });
  }
  render() {
    // view stores all the pages in array. the state determines which page will be played.
    var views = [<F0 />, <F1 handleNextFields={this.handleNextFields} />, <F2 handleNextFields={this.handleNextFields} />, <F3 handleFinish={this.handleFinish} />];
    var toView = views[this.state.view];
    return (
      <div>
        <div>
          <CheckOut handleCheckOut={this.handleCheckOut} />
        </div>
        {toView}
      </div>
    );
  }
}

var postViaAxios = function(event, callback) {
  event.preventDefault();
  var dataToSend = {};
  // event.target returns the form DOM
  dataToSend.page = event.target.id;
  // selects all the input fields that is not type=submit
  var dataFields = event.target.querySelectorAll("input:not([type='submit'])");
  // takes the data from the fields and puts them into the object.
  for (var i = 0; i < dataFields.length; i++) {
    dataToSend[dataFields[i].name] = dataFields[i].value;
  }
  var app = this;
  if (!!app.state.tempID) dataToSend.objectId = app.state.tempID;
  axios
    .post('/post', dataToSend)
    .then(function(response) {
      callback(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
