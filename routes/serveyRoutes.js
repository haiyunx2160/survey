const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredit');

const Survey = mongoose.model('serveys');

module.exports = (app) => {
  app.post('/api/serveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map((email) => {
        return { email: email.trim() };
      }),
      _user: req.user.id,
      dateSent: Date.now(),
    });
  });
};
