module.exports = {
  getServicesHeadline: (req, res) => {
    const db = req.app.get("db");
    db.services.get_services_headline(1).then((headline) => {
      res.status(200).send(headline);
    }).catch(err => {
      console.log(err);
    });
  },
  updateServicesHeadline: (req, res) => {
    const db = req.app.get("db");
    const {newHeadline} = req.body;
    db.services.update_services_headline(newHeadline, 1).then(headline => {
      res.status(200).send(headline);
    });
  },
};
