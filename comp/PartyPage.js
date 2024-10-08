import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator, Keyboard } from "react-native";
import Search from "./Search";
import { fetchParties } from "../helper/get";
import PartySearchCard from "./PartySearchCard";
import { useNavigation } from "@react-navigation/native";
import { debounce } from "lodash";

export default function PartyPage() {
  const [text, setText] = useState("");
  const [parties, setParties] = useState([]);
  const [filteredParties, setFilteredParties] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    fetchParties("").then((res) => {
      const sortedParties = res.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });

      setParties(sortedParties); 
      setFilteredParties(sortedParties); 
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const loadParties = debounce((searchText) => {
      if (searchText.length > 0) {
        const filtered = parties.filter((party) => {
          const partyCode = typeof party.code === 'string' ? party.code.toLowerCase() : '';
          const partyName = typeof party.name === 'string' ? party.name.toLowerCase() : '';

          return (
            partyName.includes(searchText.toLowerCase()) ||
            partyCode.includes(searchText.toLowerCase())
          );
        });
        setFilteredParties(filtered);
      } else {
        setFilteredParties(parties);
      }
    }, 300);

    loadParties(text);

    return () => loadParties.cancel(); 
  }, [text, parties]);

  const onPress = (party) => {
    Keyboard.dismiss(); // Dismiss the keyboard when a party is selected
    navigation.navigate("InvoicePage", { party });
  };

  return (
    <View style={s.container}>
      {loading ? (
        <ActivityIndicator size="large" color="black" style={s.loader} />
      ) : (
        <ScrollView
          style={s.scroll}
          keyboardShouldPersistTaps="handled" // Allow taps even when the keyboard is open
        >
          {filteredParties.map((party) => (
            <PartySearchCard key={party.id} party={party} onPress={onPress} />
          ))}
        </ScrollView>
      )}
      <View style={s.searchContainer}>
        <Search text={text} setText={setText} /> 
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 80,
  },
  scroll: {
    flex: 1,
    margin: 10,
  },
  searchContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "white",
  },
  loader: {
    marginTop: 20,
  },
});