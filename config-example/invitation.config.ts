import { InviteDocument } from 'src/invite/entities/invite.entity';
import { emailFrom } from 'src/invite/invite.service';

export const emailConfig = (result: InviteDocument) => ({
  from: emailFrom,
  to: result.email,
  subject: 'Invite to use app',
  text: `Hellow my frineg, your users name in current system will be ${result.email}. Please confirm your invite using the link: `,
  html: `<p>Confirm your invite using the link by 
<a href="http://localhost:3007/registration/?email=${result.email}&key=${result._id}" target="_blank">
  click here
</a>
</p>`,
});
