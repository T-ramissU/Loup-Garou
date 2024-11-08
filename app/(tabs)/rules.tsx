import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import theme, { customStyles } from "@/constants/DefaultStyles";

const rules = () => {
  return (
    <ImageBackground
      style={customStyles.container}
      source={require("@/assets/images/backgroundImage.jpg")}
    >
      <ScrollView
        style={styles.mainView}
        contentContainerStyle={styles.contentStyle}
      >
        <View style={styles.sectionView}>
          <Text style={customStyles.H1}>Le Loup-garou</Text>
          <Text style={customStyles.P1}>
            Le Loup-garou de Thiercelieux est un jeu de société basé sur la
            déduction et le bluff, souvent joué en groupe. Les joueurs incarnent
            les habitants d’un village imaginaire hanté par des loups-garous
            qui, chaque nuit, dévorent un villageois. Le but du jeu est de
            découvrir et d’éliminer les loups-garous si l'on est un villageois,
            ou d'échapper aux soupçons et de dévorer tous les villageois si l'on
            est un loup-garou.
          </Text>
        </View>
        <View style={styles.sectionView}>
          <Text style={customStyles.H1}>Déroulement</Text>
          <Text style={customStyles.P1}>
            Une partie de Loup-garou se déroule en plusieurs tours alternant
            entre la nuit et le jour. Au début, le narrateur distribue
            secrètement un rôle à chaque joueur. Lors de la phase de nuit, tous
            les joueurs ferment les yeux, et les loups-garous se réveillent
            discrètement pour désigner une victime. Certains personnages
            spéciaux (comme la voyante ou la sorcière) peuvent aussi utiliser
            leurs pouvoirs pendant cette phase. Quand le jour se lève, le
            narrateur annonce la victime de la nuit, et les villageois discutent
            pour deviner l'identité des loups-garous. À la fin de la discussion,
            ils votent pour éliminer un joueur qu’ils suspectent d’être un
            loup-garou. La partie continue jusqu’à ce que les loups-garous
            soient tous éliminés, ou qu’ils aient pris le contrôle du village.
          </Text>
        </View>
        <View style={styles.sectionView}>
          <Text style={customStyles.H1}>Le narrateur</Text>
          <Text style={customStyles.P1}>
            Le rôle principal de cette application est d’aider le narrateur à
            gérer le jeu de manière fluide et immersive. En tant qu’animateur,
            le narrateur est chargé de guider les phases du jeu, d’appeler les
            joueurs en fonction de leurs rôles et de maintenir le suspense tout
            en assurant le respect des règles. Cependant, ce rôle peut être
            difficile, surtout dans des parties où les rôles spéciaux sont
            nombreux. L’application est conçue pour alléger la tâche du
            narrateur en automatisant certaines étapes du jeu, en rappelant
            l’ordre des rôles, et en gérant les effets des personnages. Elle
            permet ainsi aux joueurs de se concentrer pleinement sur leur rôle
            et leurs stratégies, tout en facilitant une gestion fluide et sans
            erreur de la partie.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default rules;

const styles = StyleSheet.create({
  mainView: {
    padding: theme.spacing.sz2,
    flex: 1,
  },

  sectionView: {
    marginVertical: theme.spacing.sz2,
  },
  contentStyle: {
    gap: theme.spacing.sz5,
    paddingBottom: theme.spacing.sz9,
  },
});
