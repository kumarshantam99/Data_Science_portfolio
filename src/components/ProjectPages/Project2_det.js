import React from 'react'
import { Container } from '../../layout/LayoutStyles'

import { LeftSection, Section, SectionText, SectionTitle, SectionDivider } from './Project1Styles';

const Project2_detail=(props)=>(
    
    <>
    
    <Section row nopadding>
        
        <img src='/images/bitcoin.gif' size='medium' />
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
            Purchasing stock gives us ownership in a company whereas purchasing bitcoin grants us ownership of that cryptocurrency. Bitcoin prices are primarily affected by its supply, the market’s demand for it, availability and competing cryptocurrencies.

            </p>
            <br />
            <p>
                Unlike investing in traditional currencies, bitcoin is not issued by a central bank or backed by a government; therefore, the monetary policy, inflation rates, and economic growth measurements that typically influence the value of currency do not apply to bitcoin.
            </p>
            <br />
            <br />
            
            
            

            <h2>What causes bitcoin prices to go up or down?</h2>
            <br />
            <p>
                <i>Cost of production has a correlation with price.</i> <br />
                <br />
                Social media influences, media coverage- positive or negative press affecting panic sell, speculations, and availability. Volume of the bitcoin sold on the market increases, the price decreases. More institutions adopt bitcoin as an investment and medium of exchange, its price increases.</p>

            <br />
            <p>While bitcoin is the most dominant crypto related to market capitalizations, altcoins like Ethereum, Tether (USDT), Cardano etc. are among its closest competitions. The crowded field keeps the prices down.
            Fortunately for bitcoin, its high visibility gives it an edge over its competitors.
            </p>
            <br />
            <p>Bitcoin’s algorithm only allows for one block of bitcoin to be found on average once every 10 minutes. This means that more miners join the competition for solving the Math problem, the problem becomes more difficult- and thus more expensive. Bitcoin’s market price is closely related to its marginal cost of production.</p>
            <br />
            <p>The more popular an exchange becomes, the easier it may draw in additional participants to create a network effect. And by capitalizing this, the exchange may set rules governing how other currencies are added. Bitcoin’s presence on these exchanges implies a level of regulatory compliance, regardless of the legal gray area in which cryptocurrencies operate.</p>
            <br />
            <br />
            <SectionDivider />
            <br />
            <h2>Fundamental Prediction Methodologies</h2>
            <br />
            <p>Most predictive models for capital markets, in general, and specifically crypto assets can be grouped in the following categories:
            </p>
            <br />
            <ul>
                <li>
                <strong>Time-series forecasting:</strong> Time-series forecasting methods such as ARIMA or Prophet focus on predicting a specific variable based on known time-series attributes. They are incredibly easy to implement but showed some very poor resiliency to market variations which are common in crypto. Furthermore, one of the biggest limitations of time series methods is that they rely on a small and fixed number of predictors which proven to be insufficient to describe the behavior of crypto assets.

                </li>
                <li>
                <strong>Traditional machine learning:</strong> Machine learning methods such as linear regression or decision trees have been at the center of predictive models in capital markets for the last decade. Most traditional machine learning models have trouble generalizing knowledge and are very prompt to underfit.

                </li>
                <li>
                <strong>Deep learning methods:</strong> Deep learning proposes deep neural network methods for uncovering non-linear relationships between variables that can lead to price predictions. Deep learning models can achieve decent levels of performance when it comes to predictions. However, it's near impossible to interpret what these models are doing internally given its complexity and they are challenging to implement.

                </li>
            </ul>
            <br />
            <SectionDivider />
            <br />
            <h2>Data Acquisition</h2>
            <br />
            <p>
                I have used the Bitstamp dataset which was downloaded from <a href='https://www.kaggle.com/mczielinski/bitcoin-historical-data' style={{color:'#f1c40f'}}> Kaggle </a> . The dataset comprises 1 minute data from 2012/01/01 to 2021/03/31.
                <br />
                <br />

                I used <a href='https://developers.shrimpy.io/' style={{color:'#f1c40f'}}>Shrimpy</a> to get the testing data for my Analysis as its API is public, and it covers major exchanges all around the world. Its endpoints provide access to historical OHLCV prices and order books across various exchanges and analytics like weekly prediction of price, trend analysis of the asset and market insights that I can incorporate to validate my models' performance.</p>

            <br />
            <SectionDivider />
            <br />
            <h2>Feature Engineering</h2>
            
            <Section row nopadding>
            <img src='/images/6.png' style={{'max-width':'80%','padding':'20px'}} />
            <LeftSection style={{'marginTop':'20px'}}>
                <strong>The usual process of Data Cleaning!</strong>
                <br />
                <br />
                <p>Years 2012 to 2015 saw a lot of missing values in the dataset as those were the starting years for BTC and there was a lot of downtime in APIs all over the world. I decided to remove data points before 2017 as there was not much traction in price prior to that. It was after 2016 only when things started looking promising for BTC.  </p>
            
            </LeftSection >

            </Section>
            <br />
            <Section row nopadding>
            <img src='/images/7.png' style={{'max-width':'80%','padding':'20px'}} />
            <LeftSection style={{'marginTop':'20px'}}>
                
                <br />
                <p>The 'Close' prices and all other columns are obviously distriuted in a weird distribution pattern. To make some sense out of it-I converted the data points to normal distribution using log differencing.
                      </p>
                    <br />
                    <p>
                    The coefficient of correlation between two values in a time series is called the autocorrelation function. The ACF is a way to measure the linear relationship between an observation at time t and the observations at previous times.
                    </p> <br />
                    <p>The PACF is most useful for identifying the order of an autoregressive model. Specifically, sample partial autocorrelations that are significantly different from 0 indicate lagged terms of that are useful predictors of .</p>
            
            </LeftSection >

            </Section>
            <br />
            <p>I decided to tackle two problem statements for the project: </p>
            
            <ul>
                <li>Regression Problem: Predict Future 'Close' prices.</li>
                <li>Classification Problem: Predict the Market trend - '0' for market going down and '1' for market going up.</li>
            </ul>
            <p>For Classification, I shifted the 'Close' prices to the preferred prediction horizon-15 minutes, 30 minutes and an hour into the future. I then created a 'Trend' variable by comparing the 'Close' and the 'Shifted Price' columns. </p>
            <br /><p>
            This was a perfect setup now to play around with Technical Indicators to provide some statistical features toML models for better decision making. I used <a href='https://github.com/twopirllc/pandas-ta' style={{color:'#f1c40f'}}>Pandas TA</a> library to add these technical indicators as it is a wrapper around Pandas library. I experimented with Volatility and Momentum indicators to use the best ones as some of the indicators contradict each other.</p>
            <br />
            <p>For Regression, I had to think of ways to make my models stand out. I read an article in Wall Street journal and watched <a href="https://www.youtube.com/watch?v=HhOuvNDMlI0" style={{color:'#f1c40f'}}>this video</a> stating how US Dollar Index Price is inversely correlated with Bitcoin Price. I also added Blockchain data from . Since data points for the added datasets are sampled on a ddaily basis I converted them to hourly or the prediction horizon data using Resample method in Pandas and filling the missing values with ffill. </p>
            <br />
            <SectionDivider />
            <br />
            <h2>Pipeline with CI/CD setup</h2>
            <br />
            <strong>Always have a clean and planned workflow!</strong>
            <br />
            <br />
            <p>Data Science project has a lot different constraints in terms of project tracking, integration and deployment than a regular Software Engineering project. Datasets used in a DS project are too large to be tracked by Github. With so many model experimentations owing to trying out different feature engineering techniques, playing around with Hyperparameters and other fun stuff it can become pretty messy to keep a track of all the experiments and then compare all the models.</p>
            <br />
            <p>After spending a lot of time at <a href='https://medium.com/'style={{color:'#f1c40f'}}>Medium</a> I came across an interesting versioning tool called <a href='https://dvc.org/'style={{color:'#f1c40f'}}>DVC</a>- Data version Control. DVC offers services like tracking large Dataset and Models using Git as a tracking tool for all the projects without having to configure Git LFS. DVC offers other features like comparing results across all the branches of the project on Git to create shareable metrics reports for team members. DVC creates a '.dvc' extension for all the files that you want to track using Git and Git only tracks the .dvc extension. I also used DVC pipelining to layout the different '.py' files associated with different stage of the project like Data Acquisition, Preprocessing, Training and Validation. The configuraations are stored in 'dvc.yml' file at the root directory. The entire pipeline can be run using a single command: <i>dvc repro.</i></p>
            <br />
            <Section row nopadding>
            <img src='/images/8.png' style={{'max-width':'500px','maxHeight':'700px','padding':'20px'}} />
            <LeftSection style={{'marginTop':'20px'}}>
                
                <br />
                <p>DVC offers an interesting tool called as <a href='https://cml.dev/'style={{color:'#f1c40f'}}>CML</a>- Continuous Machine Learning.
                      </p>
                    <br />
                    <p>
                    CML offers the flexible action of using Github Actions to generate reports with metrics and plots in each Git Pull Request. The structure of a '*.yaml' file is shown. This file should always be put in '.github/workflows/' created at root of the present working directory. I could track all my experiemnts across various branches and the use CML to create a rport of performance difference between various branches using 'git prune'.
                    </p> <br />
                    
            
            </LeftSection >

            </Section>
            <br />
            <SectionDivider />
            <br />
            <h2>ML Modeling</h2>
            <br />
            <p>XGBoost different performances

            </p>
            <p>RNN</p>
            <p>Autocorrelation </p>
            <p></p>

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