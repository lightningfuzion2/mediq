// import React from "react";
// import {
//   View,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import MyModal from "./MyModal";
// import Search from "./Search";
// import {fetchParties} from '../helper/get'
// import PartySearchCard from "./PartySearchCard";

// export default function PartySearchModal({ visable, setVisable, setParty,sman }) {

//   const [text, setText] = React.useState("");
//   const [parties, setParties] = React.useState([]);

//   React.useEffect(() => {
//     if (text.length > 2) {
//       fetchParties(text).then((res) => {
//        setParties(res)
//       })
//     }else{
//       setParties([])
//     }
//   }, [text])

//   const onPress = (party) => {
//     setParty(party)
//   }
  
//   return (
//     <MyModal
//       setVisable={setVisable}
//       visable={visable}
//       children={
//         <View style={s.con}>
//           <ScrollView viewStyle={s.scroll} style={s.scroll}>
//             {parties.map(party => (
//                 <PartySearchCard key={party.id} party={party} onPress={onPress} setVisable={setVisable} />
//             ))}
//           </ScrollView>
//           <Search text={text} setText={setText} />
//         </View>
//       }
//     />
//   );
// }

// const s = StyleSheet.create({
//   scroll: {
//     height: 350,
//     margin: 10,
//   },
//   con: {
//     height: 400,
//     backgroundColor: "white",
//   },
//   close: {
//     margin: 10,
//     marginBottom: 20,
//     marginTop: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   img: {
//     width: 20,
//     height: 20,
//   },
// });
