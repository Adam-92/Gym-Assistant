import { TileProps } from "./Tile.model";
import useFetchData from "../../hooks/useFetchData";
import Tile from "./Tile";
import DataStatusHandler from "../DataStatusHandler/DataStatusHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTilesData } from "src/firebase/services/activity";
import {
  faShoePrints,
  faBurger,
  faWeightHanging,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

const ContainerTiles = () => {
  const { data, isLoading, error } = useFetchData(getTilesData);

  const tileIcons = useMemo(
    () => [
      <FontAwesomeIcon icon={faShoePrints} className="fa-rotate-270" />,
      <FontAwesomeIcon icon={faBurger} />,
      <FontAwesomeIcon icon={faDumbbell} />,
      <FontAwesomeIcon icon={faWeightHanging} />,
    ],
    []
  );

  return (
    <DataStatusHandler isLoading={isLoading} data={data} error={error}>
      {(data) => (
        <div className="tile">
          {data.map((tile: TileProps, index: number) => {
            return (
              <Tile
                key={tile.name}
                icon={tileIcons[index]}
                name={tile.name}
                target={tile.target}
                current={tile.current}
                style={tile.style}
              />
            );
          })}
        </div>
      )}
    </DataStatusHandler>
  );
};
export default ContainerTiles;
