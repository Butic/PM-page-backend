import { InviteDocument } from 'src/invite/entities/invite.entity';
export declare const emailConfig: (result: InviteDocument) => {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
};
