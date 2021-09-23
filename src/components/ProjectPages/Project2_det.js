import React from 'react'
import { Container } from '../../layout/LayoutStyles'
import Image from 'next/image'
import { LeftSection, Section, SectionText, SectionTitle, SectionDivider } from './Project1Styles';

const Project2_detail=(props)=>(
    
    <>
    
    <Section row nopadding>
        
        <img src='/images/ts.gif' style={{maxWidth:'500px',maxHeight:'400px',marginRight:'20px'}} />
        <LeftSection>
        <SectionTitle main center>
       Time Series Modeling 
      </SectionTitle>
      <SectionText>
        
        Continuing my BTC market prediction project, Can I uncover the mysteries that a Time series data holds?
          
        </SectionText>
        </LeftSection >
    </Section>
    
 
        
        <Container style={{padding:'10px'}}>
            
           <SectionDivider />
           <br />
            <p>
            Time series data is a type of experimental data that has been observed over a period of time (usually evenly spaced, like once a day or once an hour or once a minute). The data on airline ticket sales each day, for example, is a time series. However, just because a set of occurrences includes a time component does not make it a time series; for example, the dates of significant aircraft catastrophes are not time series since they are arbitrarily spaced. 
            </p>
            <br />
            <p>
            Time Series have several key features such as trend, seasonality, and noise.Forecasting is the process of making predictions of the future, based on past and present data.
            </p>
            <br />
            <br />
            
            
            

            <h2>Overview</h2>
            <br />
            <p>This project mainly focuses on EDA Reports and Time series forecasting. Scopes of the project are:</p>
            <ul>
                <li>Understanding different altcoins like Litecoin, Ethereum etc.</li>
                <li>Can I correlate their movements with BTC?</li>
                <li>Time Series component Analysis</li>
                <li>Time series stationarity tests</li>
                <li>Vector Autoregressive Model implementation</li>
                <li>Facebook Prophet Forecasts</li>
                
            </ul>
            <br />
            <SectionDivider />
            <br />
            <h2>Understanding various Altcoins</h2>
            <br />

            <p>The dataset used for the research is the hourly OHLCV data downloaded using the public API of Cryptocompare for Bitstamp exchange. The choice of hourly data was solely because of the fact that the API limits the response to 2000 samples, which is 2.7 months of data (May 2021 to Present).

            </p>
            <br />
            <Section row nopadding>
        
                <img src='/images/12.png' style={{maxWidth:'500px',maxHeight:'400px',marginRight:'20px'}} />
                <LeftSection>
                    <ul>
                        <li>LTC closing price was not over $100 for many hours.</li>
                        <li>It has a right-skewed distribution because a natural limit prevents outcomes on one side.</li>
                        <li>The blue dashed line (median) shows that half of the time closing prices were under $163.50.</li>
                        <li>The range of price movement for Litecoin for the 2.7 months period which revealed the range was between 150 and 250.</li>
                    </ul>
                </LeftSection >
            </Section>
            <br />
            <Section row nopadding>
        
                <img src='/images/13.png' style={{maxWidth:'500px',maxHeight:'400px',marginRight:'20px'}} />
                <LeftSection>
                <img src='/images/14.png' style={{maxWidth:'500px',maxHeight:'400px',marginRight:'20px'}} />
                </LeftSection >
            </Section>
            <br />
            <Section row nopadding>
        
                <img src='/images/15.png' style={{maxWidth:'500px',maxHeight:'400px',marginRight:'20px'}} />
                <LeftSection>
                <img src='/images/16.png' style={{maxWidth:'500px',maxHeight:'400px',marginRight:'20px'}} />
                </LeftSection >
            </Section>
            
            <br />
            <p>
            The Pearson’s correlation score was calculated and plotted as heatmap for visualization. BTC, ETH and LTC were highly correlated in the past 2 months. This means, when BTC closing price increased, ETH and LTC followed.
            </p>
            <br />
            <Section row nopadding>
        
                <img src='/images/17.png' style={{maxWidth:'500px',maxHeight:'400px',marginRight:'20px'}} />
                <LeftSection>
                <p style={{marginTop:'20px'}}>After reading an interesting article on Wall Street’s journal and watching this <a href='https://www.youtube.com/watch?v=HhOuvNDMlI0' style={{color:'#f1c40f'}}>video</a> I decided to add a new column to my time series data and the new column was US Dollar Index Futures Historical Price Data from <a href='https://www.investing.com/currencies/us-dollar-index-historical-data' style={{color:'#f1c40f'}}>here </a>downloaded at daily intervals from 2012 to 2021. The missing values were imputed using Pandas.DataFrame.interpolate() function from Pandas library. The plot clearly shows US Dollar Price (in green) has an inverse correlation with the BTC close price which can be an interesting predictor for the problem.
                </p>
                </LeftSection >
            </Section>
            <br />

            <SectionDivider />
            <br />
            <h2>Time Series Analysis</h2>
            <br />
            <p>
                <ul>
                    <li>Time series analysis requires converting the dataset with normal indices to Datetime indices to make it a time series data.</li>
                    <li>
                        The first thing I did, after Feature Engineering steps from BTC Market prediction project, is to check for stationarity of the dataset.
                    </li>
                    <li>Time series are stationary if they donot have trend or seasonal effects. Summary statistics calculated on the time series are consistent over time like the mean or the variance of the observation. </li>
                    <li>I used ADF  (Augmented Dickey-Fueller Test) to check for the stationarity of the dataset. If the result of p-value after the test is less than the significance level (generally taken 0.05) then the data is said to be stationary.</li>
                    <li>Inital test resulted in p-value to be close to 1. After applying differencing (using Pandas' .diff() function) the p-value came close to 0 which proved the data has now become stationary. </li>
                </ul>
                

                </p>

            <br />
            <SectionDivider />
            <br />
            <h2>Vector Autoregression</h2>
            <br />
            <p>Vector Autoregression (VAR) is a forecasting algorithm that can be used when two or more time series influence each other. That is, the relationship between the time series involved is bi-directional. In this post, we will see the concepts, intuition behind VAR models and see a comprehensive and correct method to train and forecast VAR models in python using statsmodels.</p>
            <br />
            <p>the basic requirements in order to use VAR are:</p>
            <ul>
                <li>At least two time series (variables)</li>
                <li>The time series should influence each other.</li>
            </ul>
            <p>I used three Time series features: Close (Close Price of BTC), Volume of BTC and Price (US Dollar Index Price)</p>
            <br />
            <Section>
            <img src='/images/18.png' style={{maxWidth:'600px',maxHeight:'750px',marginRight:'20px'}} />

            </Section >


            <br />
            <SectionDivider />
            <br />
            <h2>Facebook Prophet</h2>
            <br />
            <p>Prophet is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. It works best with time series that have strong seasonal effects and several seasons of historical data. Prophet is robust to missing data and shifts in the trend, and typically handles outliers well. Refer Prophet <a href='https://facebook.github.io/prophet/' style={{color:'#f1c40f'}}>here.</a>
            <br />
            <br />
The Prophet package provides intuitive parameters which are easy to tune. Even someone with minimum expertise in forecasting models can use this to make meaningful predictions for a variety of problems in a business scenario.

            </p>
            <br />
            <p>In order to use Prophet, the dataset has to be divided into two variables: ds (datetime samples) and y(target variable). The first attempt I decided to use daily sampled datapoints to understand the baseline performance.</p>
            <br />
            <br />

            <p>To improve model performance, I added Volume_BTC_ and Price(USD index price) as additional regressors for the model and resampled the daily data into hourly data to understand how granularity of data affects the model performance. </p>
            <br />
            <Section nopadding>
            <img src='/images/19.png' style={{maxWidth:'100%',maxHeight:'750px'}} />
            <br />
                <p>The model is predicting price (yhat) of 43120.272423 for March 31, 2022. This prediction can not be said to be true or false yet. The model performance shows that the 2021 to 2022 is pretty much a bullish trend. Although the price prediction is far off starting from mid 2020 it can be considered a decent performance for baseline modelling.
</p>
<br /><p>The Green band shows upper range of prediction and blue line shows the lower range of prediction.</p>
                
            </Section>
            <Section>
            <img src='/images/20.png' style={{maxWidth:'100%',maxHeight:'750px'}} />
            <br />
            <p>
            The model was fit with hourly data points to add more granularity and more seasonal components to the data. The US Dollar Index Price was treated as an ‘auto-regressive’ feature to add more learning patterns for the model and see how the model performs.


            </p>
            <br />
            <p>This time the model predicts 66197.15 as the upper limit for price for March 31, 2022 which can be true considering what I have been seeing on reddit posts and ‘To the moon’ chants.
</p>
<br /><p>This time the prediction line did reduce in gap from the actual line and also the upper limit for prediction increased from the last time. This was an interesting observation as increasing the granularity and adding extra variables like USD index price affect the prediction by a good margin.</p>
            <br />
            </Section>
            <Section row nopadding>
            <img src='/images/21.png' style={{maxWidth:'500px',maxHeight:'400px',marginRight:'20px'}} />
            <p style={{marginTop:'20px'}}>As Prophet plots out different seasonal components of the timeseries data for our visualizations, we can uncover a lot of underlying patterns like what time of the day or what day of the month the price goes up or down- pretty neat stuff!! From both the plots, as there are two predictions, I can conclude that the prices are generally up after 8 PM and around weekends of March.</p>
            <img src='/images/22.png' style={{maxWidth:'500px',maxHeight:'400px',marginRight:'20px'}} />
            </Section>
        </Container>
        <style jsx>{`
                ul {
                list-style: square;
                padding: 20px;
                max-width:100%;
                }
                li {
                padding: 1em 0;
                
                }
            `}</style>

    </>

)


export default Project2_detail;