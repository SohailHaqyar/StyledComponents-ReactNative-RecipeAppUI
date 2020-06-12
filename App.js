import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
export default function App() {
  let [fontLoaded] = useFonts({
    'Nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
    'Nunito-Light-Italic': require('./assets/fonts/Nunito-LightItalic.ttf'),
  });
  const recipes = [
    {
      name: 'Pad Thai',
      info: '45 min | 2 servings',
      image:
        'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },

    {
      name: 'Seared Scallops with Romesco Sauce',
      info: '20 min | 4 servings',
      image:
        'https://images.unsplash.com/photo-1523218392679-568e996fde65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Grilled Chicken with Lemon Butter',
      info: '60 min | 2 servings',
      image:
        'https://images.unsplash.com/photo-1580959375944-abd7e991f971?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
  ];
  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <StatusBar hidden={false} barStyle="light-content" />
        <RecipeBackground
          source={{
            uri:
              'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=653&q=80',
          }}
        >
          <SafeAreaView>
            <MenuBar>
              <Back>
                <AntDesign name="arrowleft" size={24} color="#FFF" />
                <Text style={{ marginLeft: 10 }}>Ingredients</Text>
              </Back>
              <AntDesign name="heart" size={24} color="white" />
            </MenuBar>
            <MainRecipe>
              <Text title heavy>
                Spicy Shripmp
              </Text>
              <Divider />
              <Text heavy>80 calories per 100g</Text>
              <Text>3g fat | 10g protein | 8g carbs</Text>
            </MainRecipe>
            <Button>
              <Text heavy>LEARN MORE</Text>
            </Button>
          </SafeAreaView>
        </RecipeBackground>
        <RecipeContainer>
          <ScrollView>
            <Text dark heavy large>
              Recipes
            </Text>
            <Text dark small>
              18 Recipes Available
            </Text>
            <Recipes>
              {recipes.map((rec, index) => (
                <Recipe key={index}>
                  <RecipeImage source={{ uri: rec.image }} />
                  <RecipeInfo>
                    <Text dark heavy>
                      {rec.name}
                    </Text>
                    <Text dark small>
                      {rec.info}
                    </Text>
                  </RecipeInfo>
                  <AntDesign name="hearto" size={18} color="#000" />
                </Recipe>
              ))}
            </Recipes>
          </ScrollView>
        </RecipeContainer>
      </Container>
    );
  }
}
const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const Text = styled.Text`
  color: ${(props) => (props.dark ? '#000' : '#FFF')};
  font-family: 'Nunito-Light'
    ${({ title, large, small }) => {
      switch (true) {
        case title:
          return `font-size:32px`;
        case large:
          return `font-size: 20px`;
        case small:
          return `font-size:13px`;
      }
    }};
  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight:600`;
      case heavy:
        return `font-weight:700`;
    }
  }}
`;
const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;
const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;

const RecipeContainer = styled.View`
  margin-top: -24px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Recipes = styled.View`
  margin-top: 16px;
`;
const Recipe = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const RecipeImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const RecipeInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;
