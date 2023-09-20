"use client";
import Link from "next/link";
import styles from "./page.module.css";
import utilStyles from "@/styles/utils.module.css";
import Layout from "@/components/layout/layout";
import Image from "next/image";
import AssetCardBig from "@/components/assetcard/assetcardbig";
import Infogrid from "@/components/infogrid/infogrid";
import Badges from "@/components/badges/badge";
import { LayersControl, MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import ShapeFile from "@/components/shapefile/ShapeFile";
import { useEffect, useRef, useState } from "react";
import { map } from "leaflet";
import { MapMouseTracker } from "@/components/mapmousetracker/MapMouseTracker";

const { BaseLayer, Overlay } = LayersControl;

export default function AvailableArea({ params }: { params: any }) {
  const [geodata, setGeodata] = useState(null);
  const [geoJSONProps, setGeoJSONProps] = useState({});
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const [terrainSelected, setTerrainSelected] = useState({
    type: {},
    geometry: {},
    properties: {},
  });
  const mapRef = useRef(null);

  const props: object = {
    propTopBar: {
      mode: 2,
      title: undefined,
    },
    propMain: {
      className: styles.mainContainer,
      mode: 1,
      icon: true,
    },
    propMenu: {
      className: "",
      mode: 2,
    },
  };

  const owner: string = "Antonio";
  const value: number = 5;
  const region: string = "Minas Gerais";
  const area: number = 23.0;
  /* PROPERTY NAME */
  const propertyName = "FARM CATUÍ";

  const style = () => {
    return {
      weight: 2,
      opacity: 0.2,
      color: "blue",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    if (feature.properties) {
      layer.on("click", function () {
        setTerrainSelected({
          type: feature.type,
          geometry: feature.geometry,
          properties: feature.properties,
        });
      });
    }
  };

  useEffect(() => {
    (async () => {
      if (!geodata) {
        var reader = new FileReader();
        const file = await fetch(
          "https://nftstorage.link/ipfs/bafybeidrth54oiz6foji7rl3vkhavu4juv2oefzsajfenp2fzyx3bdd3zi"
        ).then((res) => res.blob());
        reader.readAsArrayBuffer(file);
        reader.onload = function (buffer: any) {
          setGeodata(buffer.target.result);
        };
      }
    })();
  });

  let ShapeLayers = null;
  if (geodata !== null) {
    ShapeLayers = (
      <Overlay checked name="Feature group">
        <ShapeFile data={geodata} style={style} onEachFeature={onEachFeature} />
      </Overlay>
    );
  }

  return (
    <Layout {...props}>
      <div className={utilStyles.iconedTitle}>
        <Image src="/images/icons/iconFarm.svg" alt="" width={34} height={40} />
        <h1 className={utilStyles.subtitle}>{propertyName}</h1>
      </div>
      <AssetCardBig
        value={100}
        imgUrl={"/images/temp_assets/image5.svg"}
        // description={"something more than just a few words"}
        description={
          "Nestled amidst the scenic beauty of Minas Gerais, Brazil, this farm is a haven for land preservation enthusiasts. It showcases a harmonious blend of agriculture and environmental stewardship, with large portions of the land dedicated to preserving the natural ecosystem. Lush forests and pristine water sources are carefully maintained, providing a refuge for native wildlife."
        }
      />
      <div className={styles.buyInfoContainer}>
        {" "}
        {/* Info Container */}
        <div className={styles.leftSideContainer}>
          {" "}
          {/* left */}
          <div className={styles.flexContent}>
            <Image
              src="/images/icons/Maskgroup.svg"
              alt=""
              width={35}
              height={35}
            />
            <div>
              <h3>Owner:</h3>
              <h1>{owner}</h1>
            </div>
          </div>
          <div className={styles.flexContent}>
            <Image
              src="/images/topBar/originaLogo3.svg"
              alt=""
              width={35}
              height={35}
            />
            <h1>$ {value} m²</h1>
          </div>
          <div className={styles.flexContent}>
            <Image
              src="/images/icons/river_2.svg"
              alt=""
              width={35}
              height={35}
            />
            <h1>Nascente Preservada</h1>
          </div>
        </div>
        <div className={styles.rightSideContainer}>
          {/* Right */}
          <div className={styles.flexContent}>
            {/* Badges */}
            <Badges badge1={true} badge2={true} badge5={true} />
          </div>
          <div className={styles.flexContent}>
            <Image
              src="/images/icons/newareasIcon.svg"
              alt=""
              width={35}
              height={35}
            />
            <h1>Mata Atlântica</h1>
          </div>
          <div className={styles.flexContent}>
            <Image
              src="/images/icons/native_logo.svg"
              alt=""
              width={35}
              height={35}
            />
            <div>
              <h3>Total Area:</h3>
              <h1>{area} ha</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lowerTab}>
        <h1 className={`${utilStyles.subtitle} ${styles.title}`}>
          Choose your Origina Areas
        </h1>
        <div className={styles.mappingView}>
          <MapContainer
            className={styles.map}
            center={[-21.461006900193254, -44.92968052625657]}
            zoom={12}
            zoomControl={true}
            ref={mapRef}
          >
            <LayersControl>
              <BaseLayer checked name="OpenStreetMap">
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
              </BaseLayer>

              {geodata && <ShapeFile data={geodata}></ShapeFile>}
              {ShapeLayers}
            </LayersControl>
          </MapContainer>
        </div>
        {(terrainSelected.properties as any).cod_estado && (
          <Infogrid
            property={(terrainSelected.properties as any).cod_estado}
            municipality={(terrainSelected.properties as any).municipio}
            cmb={148}
            lat={(terrainSelected.properties as any).POINTX}
            long={(terrainSelected.properties as any).POINTY}
            token={(terrainSelected.properties as any).POLY_ID}
            mode={0}
          />
        )}
      </div>
      <div className={styles.buttonArea}>
        <Link href={`/dashboard/marketplace/${params.id}/buyconfirmation`}>
          <button className={`${utilStyles.button} ${styles.buttonspecs}`}>
            Buy
          </button>
        </Link>
      </div>
    </Layout>
  );
}
