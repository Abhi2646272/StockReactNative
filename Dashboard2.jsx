import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

function Dashboard2() {
  const [forexData, setForexData] = useState([]);
  const [ipoData, setIpoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_e983c2b2c1414ea6b216d534661c792d');
        const response2 = await fetch('https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_e983c2b2c1414ea6b216d534661c792d');
        
        if (!response1.ok || !response2.ok) {
          throw new Error('Failed to fetch data');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();
        setForexData(data1);
        setIpoData(data2);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {/* Tabs */}
        <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#f0f0f0' }}>
         
         
        </View>

        {/* Tab Content */}
        <View>
          {/* Currency Rates */}
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 10,
              backgroundColor: '#e6e6e6',
              marginRight: 10,
              borderRadius: 5,
            }}
          >
            Currency Rates
          </Text>
          {forexData.length > 0 && (
            <ScrollView>
              {forexData.map((forex, index) => (
                <View key={index} style={{ flexDirection: 'column', padding: 10 }}>
                  <Text>Symbol             :                {forex.symbol }  </Text>
                  <Text>Rate                  :                {forex.rate}      </Text>
                  <Text>Date                  :                {new Date(forex.timestamp).toLocaleString()}  </Text>
                   
                </View>
              ))}
            </ScrollView>
          )}
             <Text
            style={{
              flex: 1,
              textAlign: 'center',
              padding: 10,
              backgroundColor: '#e6e6e6',
              borderRadius: 5,
            }}
          >
            Upcoming IPO's
          </Text>
          {/* Upcoming IPO's */}
          {ipoData.length > 0 && (
            <ScrollView>
              {ipoData.map((ipo, index) => (
                <View key={index} style={{ flexDirection: 'column', padding: 10,marginLeft:'50' }}>
                  <Text style={{  fontWeight:'bold' }}>{ipo.companyName}  </Text>
                  <Text>Symbol                            :             {ipo.symbol} </Text>
                  <Text>Status                              :             {ipo.status}</Text>
                  <Text>Offering Date                  :             {ipo.offeringDate}</Text>
                  <Text>Price Range(Low)          :             {ipo.priceRangeLow}</Text>
                  <Text>Price Range(High)         :             {ipo.priceRangeHigh}</Text>
                  <Text>Shares                             :             {ipo.shares}</Text>
                  <Text>Volume                            :             {ipo.volume}</Text>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </View>
  );
}


export default Dashboard2;
