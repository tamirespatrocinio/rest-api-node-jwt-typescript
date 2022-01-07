import { model, Model } from 'mongoose';
import UserSchema, { IUser } from './schema';

UserSchema.pre<IUser>('save', function (next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});

const User: Model<IUser> = model('User', UserSchema);

export default User;