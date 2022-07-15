class coding {
  static home = (req, res) => {
    res.render("index");
    // res.send("index");
  };
  static about = (req, res) => {
    res.render("about");
    // res.send("about");
  };
  static service = (req, res) => {
    res.render("services");
    // res.send("service");
  };
  static account = (req, res) => {
    res.render("account");
    // res.send("service");
  };
  static earning = (req, res) => {
    res.render("earning");
    // res.send("service");
  };
  static project = (req, res) => {
    res.render("project");
    // res.send("service");
  };
  static support = (req, res) => {
    res.render("support");
    // res.send("service");
  };
  static team = (req, res) => {
    res.render("team");
    // res.send("service");
  };
}
export default coding;
