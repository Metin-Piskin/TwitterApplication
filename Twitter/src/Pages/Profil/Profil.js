import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

import Button from '../../Component/Button';
import {
  LeftArrow,
  DownArrow,
  CommentStroke,
  RetweetStroke,
  RetweetSolid,
  HeartStroke,
  HeartSolid,
  ShareStroke
} from '../../Component/Svg/Svg';


const Profil = ({ navigation }) => {
  const [CurrentLoggedInUser, setCurrentLoggedInUser] = useState(true)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth().currentUser
    firestore()
      .collection('users')
      .where('owner_uid', '==', user.uid)
      .get()
      .then(querySnapshot => {
        //console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          setCurrentLoggedInUser(documentSnapshot.data());
        });
      });
    if (!!CurrentLoggedInUser) {
      setLoading(false);
    }
  }, [])
  return (
    <>
      <Button addtext={true} />
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: "#191919"
          }}
        >
          <View
            style={{
              backgroundColor: '#4C9EEB',
              width: '100%',
              height: 120
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#191919",
                position: 'absolute',
                left: 10,
                top: 15,
                padding: 12,
                paddingHorizontal: 15,
                borderRadius: 20,
              }}
              onPress={() => navigation.goBack()}
            >
              <LeftArrow />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#000'
            }}
          >
            <View
              style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Image
                source={{ uri: CurrentLoggedInUser.profile_picture }}
                style={{
                  resizeMode: 'contain',
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  borderWidth: 4,
                  borderColor: '#000',
                  marginTop: -30,
                }}
              />
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#4C9EEB',
                  padding: 8,
                  paddingVertical: 5,
                  marginHorizontal: 5,
                  borderRadius: 20
                }}
              >
                <Text
                  style={{
                    color: '#4C9EEB'
                  }}
                >Profil düzenle</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginHorizontal: 15,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 25,

                }}
              >{CurrentLoggedInUser.name}</Text>
              <Text
                style={{
                  color: '#687684',
                  marginBottom: 15
                }}
              >@{CurrentLoggedInUser.nickname}</Text>
              <Text
                style={{
                  color: '#687684',
                  marginBottom: 10
                }}
              >Ağustos 2019 tarihinde katıldı</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    marginRight: 10
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      marginRight: 3
                    }}
                  >
                    7
                  </Text>
                  <Text
                    style={{
                      color: '#687684'
                    }}
                  >Takip edilen</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      marginRight: 3
                    }}
                  >
                    7
                  </Text>
                  <Text
                    style={{
                      color: '#687684'
                    }}
                  >Takipcçi</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 15,
              }}
            >
              <TouchableOpacity
                style={{
                  borderBottomWidth: 3,
                  borderColor: '#4C9EEB',
                  marginRight: 35
                }}
              >
                <Text
                  style={{
                    color: '#4C9EEB',
                    fontWeight: '600',
                    marginBottom: 5
                  }}
                >Tweet</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginRight: 35
                }}
              >
                <Text
                  style={{
                    color: '#687684',
                    fontWeight: '600',
                    marginBottom: 5
                  }}
                >Tweetler ve yanıtlar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginRight: 35
                }}
              >
                <Text
                  style={{
                    color: '#687684',
                    fontWeight: '600',
                    marginBottom: 5

                  }}
                >Medya</Text>
              </TouchableOpacity>
              <TouchableOpacity

              >
                <Text
                  style={{
                    color: '#687684',
                    fontWeight: '600',
                    marginBottom: 5

                  }}
                >Beğeni</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#000',
              alignItems: 'center',
            }}
          >
            <View style={{
            
              width: '100%',
              paddingVertical: 3
            }} />
            <View style={{
              flexDirection: 'row',
              marginHorizontal: 20,
            }}>
              <Image
                source={{ uri: CurrentLoggedInUser.profile_picture }}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  borderRadius: 25,
                  marginRight: 5
                }}
              />
              <View
                style={{ flex: 1 }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{

                      color: '#fff'
                    }}
                  >
                    {CurrentLoggedInUser.name}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 5,
                      color: "#191919"
                    }}
                  >
                    @{CurrentLoggedInUser.nickname}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 5,
                      color: "#191919",
                      flex: 1
                    }}
                  >
                    {/*post.createdAt*/}
                  </Text>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                    }}
                  >
                    <DownArrow />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={{

                      color: '#fff'
                    }}
                  >
                    🤘🏽
                  </Text>
                </View>
              </View>
            </View>
            <Image
              source={{ uri: 'https://i.scdn.co/image/ab67616d0000b27304689e9ae32a5f42d012c64c' }}
              style={{
                width: 310,
                height: 270,
                resizeMode: 'contain',
                marginVertical: 10,
                marginLeft: 38,
                borderRadius: 15
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 75,
                marginRight: 35,
                marginBottom: 7
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <CommentStroke fill={"#687684"} />
                <Text
                  style={{
                    color: "#687684",
                    marginLeft: 5
                  }}
                >
                  3
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RetweetStroke fill={"#687684"} />
                <Text
                  style={{
                    color: "#687684",
                    marginLeft: 5
                  }}
                >
                  3
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}

              >
                <HeartSolid />
                <Text
                  style={{
                    color: "#687684",
                    marginLeft: 5
                  }}
                >
                  7
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <ShareStroke fill={"#687684"} />
              </TouchableOpacity>
            </View>
          </View >

          <View
            style={{
              backgroundColor: '#000',
              alignItems: 'center',
            }}
          >
            <View style={{
              borderTopWidth: 0.19,
              borderColor: '#fff',
              width: '100%',
              paddingVertical: 3
            }} />
            <View style={{
              flexDirection: 'row',
              marginHorizontal: 20,
            }}>
              <Image
                source={{ uri: CurrentLoggedInUser.profile_picture }}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  borderRadius: 25,
                  marginRight: 5
                }}
              />
              <View
                style={{ flex: 1 }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{

                      color: '#fff'
                    }}
                  >
                    {CurrentLoggedInUser.name}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 5,
                      color: "#191919"
                    }}
                  >
                    @{CurrentLoggedInUser.nickname}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 5,
                      color: "#191919",
                      flex: 1
                    }}
                  >
                    {/*post.createdAt*/}
                  </Text>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                    }}
                  >
                    <DownArrow />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={{

                      color: '#fff'
                    }}
                  >
                    He was never on your side God was never on your side Let right or wrong alone decide God was never on your side No, no, no!
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 75,
                marginRight: 35,
                marginBottom: 7
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <CommentStroke fill={"#687684"} />
                <Text
                  style={{
                    color: "#687684",
                    marginLeft: 5
                  }}
                >
                  1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RetweetStroke fill={"#687684"} />
                <Text
                  style={{
                    color: "#687684",
                    marginLeft: 5
                  }}
                >
                  2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}

              >
                <HeartSolid />
                <Text
                  style={{
                    color: "#687684",
                    marginLeft: 5
                  }}
                >
                  7
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <ShareStroke fill={"#687684"} />
              </TouchableOpacity>
            </View>
          </View >
        </View>
      </ScrollView>
    </>
  )
}

export default Profil;