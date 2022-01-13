import { IUser } from "../schema";

interface IUserView {
    _id: string;
    firstName: string;
    lastName?: string;
    email: string;
}

const usersView = {
    render(user: IUser): IUserView {
        return {
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        };
    },

    renderMany(users: IUser[]): IUserView[] {
        return users.map((user) => this.render(user));
    },
};

export default usersView;