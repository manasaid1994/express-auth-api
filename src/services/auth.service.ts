import { User, IUser } from '../models/user';
import { generateToken } from '../utils/generateToken';

export const registerUser = async (name: string, email: string, password: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const user = await User.create({ name, email, password });
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id.toString()),
  };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid email or password');

  const isMatch = await user.matchPassword(password);
  if (!isMatch) throw new Error('Invalid email or password');

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id.toString()),
  };
};
