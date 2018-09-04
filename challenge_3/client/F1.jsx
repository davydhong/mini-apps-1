var F1 = props => (
  <div>
    <form id="F1" onSubmit={props.handleNextFields}>
      Name
      <input name="name" placeholder="name" />
      <br />
      Email
      <input name="email" placeholder="email" />
      <br />
      Password
      <input type="password" name="password" placeholder="password" />
      <input type="submit" value="next" />
    </form>
  </div>
);
