var F1 = props => (
  <div>
    <form>
      Name
      <input name="name" placeholder="name" />
      <br />
      Email
      <input name="email" placeholder="email" />
      <br />
      Password
      <input name="password" placeholder="password" />
    </form>
    <button
      onClick={() => {
        props.handleNextFields();
      }}>
      Next
    </button>
  </div>
);

var name = document.querySelector("input[name='name']").value;
var email = document.querySelector("input[name='email']").value;
var password = document.querySelector("input[name='password']").value;

// document.getElementsByName("card_number")[0].value
