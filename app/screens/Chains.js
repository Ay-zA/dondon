import React, { Component } from 'react';
import {
  StyleSheet, FlatList, View, Image, ScrollView,
} from 'react-native';
import {
  Card, ListItem, Button, Avatar, List, Divider,
} from 'react-native-elements';
import Header from '../components/Header';
import FarsiText from '../components/FarsiText';
import FarsiButton from '../components/FarsiButton';
import colors from '../constants/colors';

const chains = [
  {
    id: '0',
    name: 'زنجیره اول',
    minRate: 10,
    maxRate: 20,
    isActive: true,
    chainUsers: [],
    category: 'فروشگاه',
    nodes: [{
      id: '0',
      name: 'دایموند',
      logo: 'diamond',
    }, {
      id: '2',
      name: 'علی بابا',
      logo: 'alibaba',
    },
    {
      id: '3',
      name: 'دیجی کالا',
      logo: 'digikala',
    }, {
      id: '4',
      name: 'موج',
      logo: 'wave',
    }],
  },
  {
    id: '1',
    name: 'زنجیره دوم',
    minRate: 10,
    maxRate: 20,
    isActive: true,
    chainUsers: [],
    category: 'فروشگاه',
    nodes: [{
      id: '1',
      name: 'بامیلو',
      logo: 'bamilo',
    }, {
      id: '2',
      name: 'علی بابا',
      logo: 'alibaba',
    }, {
      id: '5',
      name: 'دیفیس',
      logo: 'experiment',
    },
    {
      id: '6',
      name: 'پلی',
      logo: 'player',
    }],
  },
];

export default class ChainsScreen extends Component {
  state = {
    selectedChain: null,
    chains: [],
  }

  componentDidMount() {
    fetch('http://192.168.1.103:45455/api/Temp').then(res => res.json()).then(res => this.setState({
      chains: res,
    }));
  }

  seletChain = (chain) => {
    this.setState({
      selectedChain: chain,
    });
  }

  back = () => {
    this.setState({
      selectedChain: null,
    });
  }

  renderChains = () => (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <Header />

      {this.state.chains.map(chain => (
        <Card key={chain.id} title={chain.name} width="95%" containerStyle={{ borderRadius: 4 }}>
          {
            chain.nodes.map(u => (
              <View key={u.id} style={styles.cardItems}>
                <Avatar
                  medium
                  style={styles.logo}
                  resizeMode="cover"
                  source={{ uri: `https://raw.githubusercontent.com/frontendmonster/yy/master/${u.logo}.png` }}
                  overlayContainerStyle={{ backgroundColor: colors.transparent }}
                  containerStyle={styles.avatar}
                />
                <FarsiText>{u.name}</FarsiText>
              </View>))
          }
          <FarsiButton
            title="بیشتر"
            marginLeft={0}
            containerViewStyle={{
              marginTop: 10, width: '100%', marginLeft: 0, marginRight: 0,
            }}
            onPress={this.seletChain.bind({}, chain)}
          />
        </Card>
      ))}
    </ScrollView>
  )

  renderSelectedChain = () => {
    const chain = this.state.selectedChain;

    return (
      <View style={{ flex: 1 }}>
        <Header
          title={chain.name}
          rightComponent={{
            icon: 'arrow-forward',
            color: '#fff',
            onPress: this.back,
            underlayColor: colors.tintColor, // <-- this does the magic
          }}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={chain.nodes}
            renderItem={({ item: node }) => (
              <Card containerStyle={{ marginHorizontal: 0 }}>
                <Image
                  style={{ width: 100, height: 100, marginBottom: 10 }}
                  source={{ uri: `https://raw.githubusercontent.com/frontendmonster/yy/master/${node.logo}.png` }}
                />
                <Divider />
                <FarsiText style={{ marginTop: 5, alignSelf: 'center' }}>{node.name}</FarsiText>
              </Card>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 20, marginBottom: 10 }}>
          <Card containerStyle={{ margin: 0, flex: 1 }}>
            <View style={{ height: '80%' }}>
              <FarsiText style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 16 }}>اطلاعات</FarsiText>
              <View style={{
                flexDirection: 'row-reverse', alignItems: 'flex-end', marginBottom: 4,
              }}
              >
                <FarsiText style={{ marginLeft: 10 }}>دسته بندی:</FarsiText>
                <FarsiText>{chain.category}</FarsiText>
              </View>
              <View style={{ flexDirection: 'row-reverse', alignItems: 'flex-end', marginBottom: 4 }}>
                <FarsiText style={{ marginLeft: 10 }}>تخفیف:</FarsiText>
                <FarsiText>{`${chain.minRate}%`}</FarsiText>
                <FarsiText style={{ fontSize: 18, color: colors.accentColor }}>{`${chain.maxRate}%/`}</FarsiText>
              </View>
            </View>
            <FarsiButton
              containerViewStyle={{
                flex: 0,
                marginTop: 10,
                width: '100%',
                marginLeft: 0,
                marginRight: 0,
              }}
              title="ورود به زنجیره"
            />
          </Card>
        </View>
      </View>
    );
  }

  render() {
    return (
      this.state.selectedChain
        ? this.renderSelectedChain()
        : this.renderChains()

    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  cardItems: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  logo: {
    width: 96,
    height: 96,
  },
  avatar: {
    marginLeft: 10,
  },
});
