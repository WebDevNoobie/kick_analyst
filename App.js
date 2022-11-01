import { StatusBar } from 'expo-status-bar';
import {Navigation_Stack} from './Navigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <Navigation_Stack/>
      <StatusBar style='dark'/>
    </>
  );
}