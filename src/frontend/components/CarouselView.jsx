import { Carousel } from 'antd';
import Layout from './layouts/Layout';

function CarouselView({ team_members, settings }) {
    return (
        <div className=''
          style={{
            width: `${settings?.containerSettings?.width?.default}px`,
            gridTemplateColumns: `repeat(${settings.columnSettings?.column?.default}, 1fr)`,
            gap: `${settings.columnSettings?.gap?.default}px`,
            marginTop: `${settings?.containerSettings?.margin_top}px`,
            marginRight: `${settings?.containerSettings?.margin_right}px`,
            marginBottom: `${settings?.containerSettings?.margin_bottom}px`,
            marginLeft: `${settings?.containerSettings?.margin_left}px`,
            paddingTop: `${settings?.containerSettings?.padding_top}px`,
            paddingRight: `${settings?.containerSettings?.padding_right}px`,
            paddingBottom: `${settings?.containerSettings?.padding_bottom}px`,
            paddingLeft: `${settings?.containerSettings?.padding_left}px`,
            borderTopLeftRadius: `${settings?.containerSettings?.borderRadius_top}px`,
            borderTopRightRadius: `${settings?.containerSettings?.borderRadius_right}px`,
            borderBottomLeftRadius: `${settings?.containerSettings?.borderRadius_bottom}px`,
            borderBottomRightRadius: `${settings?.containerSettings?.borderRadius_left}px`,
            backgroundColor: settings.containerSettings?.backgroundColor,
        }}
        >
            <Carousel 
            slidesPerRow={settings.carouselSettings.slidesToShow?.default} 
            slidesToScroll={settings.carouselSettings.slidesToScroll?.default} 
            draggable={settings.carouselSettings?.draggable === 'true' ? true : false}
            centerMode={settings.carouselSettings?.centerSlide === 'true' ? true : false}
            autoplay={settings.carouselSettings?.autoPlay === 'true' ? true : false}
            >
            {team_members && team_members.length > 0 ? (
              team_members.map((member, index) => (
                <div key={index}>
                  <Layout
                    settings={settings}
                    layoutType={settings.layout}
                    imageUrl={member.team_member_image}
                    title={member.title || "No Name"}
                    subtitle={member.subtitle}
                    description={member.description}
                    socialIcons={member.socialIcons || []}
                  />
                </div>
              ))
            ) : (
              <p>No team members found.</p>
            )}
          </Carousel>
        </div>
    );
}

export default CarouselView;