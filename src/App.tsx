 import React from 'react';

 import {
   SafeAreaView,
   Text,
   View,
 } from 'react-native';
 import {Resolver} from "./Resolver";
 import {Container} from "./components/Container";

 const json = [{"id":"container1","type":"container","props":{"direction":"horizontal","horizontalAlign":"space-around","verticalAlign":"center","height":10,"items":[{"id":"input1","type":"input","props":{"placeholder":"Напиши что-нибудь","title":"Looool"}}]}},{"id":"container2","type":"container","props":{"direction":"horizontal","horizontalAlign":"space-around","verticalAlign":"center","height":10,"items":[{"id":"button1","type":"button","props":{"type":"default","text":"КПОПКАЧКА","size":"normal"},"index":1,"containerID":"screen"}]}},{"id":"container3","type":"container","props":{"direction":"horizontal","horizontalAlign":"space-around","verticalAlign":"center","height":10,"items":[{"id":"input2","type":"input","props":{"placeholder":"Как дела*?","title":"Привет"},"index":3,"containerID":"screen"}]}}]
 const App = () => {
   const refStore = React.useRef(Array<any>());

   return (
     <SafeAreaView>
         <View  style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
             {json.map((i, index) => {
                 return <Resolver ref={(element:any) => refStore.current.push(element)} type={i.type} props={i.props}/>
             })}
         </View>
     </SafeAreaView>
   );
 };

 export default App;
