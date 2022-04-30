"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailConfig = void 0;
const invite_service_1 = require("../src/invite/invite.service");
const emailConfig = (result) => ({
    from: invite_service_1.emailFrom,
    to: result.email,
    subject: 'Invite to use app',
    text: `Hellow my frineg, your users name in current system will be ${result.email}. Please confirm your invite using the link: `,
    html: `<p>Confirm your invite using the link by 
<a href="http://localhost:3007/registration/?email=${result.email}&key=${result._id}" target="_blank">
  click here
</a>
</p>`,
});
exports.emailConfig = emailConfig;
//# sourceMappingURL=invitation.config.js.map