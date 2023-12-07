//components
import { Pagination, Table, Button } from "component-library";

//hooks
import useNavigation from "../../../../hooks/useNavigation";

//types
import { PokemonDto, PokemonsDto } from "../../../../api";

//images
import defaultImg from "../../../../assets/default-img.png";

const tableHeader = ["ID", "Image", "Name", "Experiencie", "Actions"];

interface TableViewProps {
  pokemons: PokemonsDto;
  currentPage: number;
  totalPages: number;
  paginateGoTo: (newNumber: number) => void;
}

export default function TableView({
  pokemons,
  currentPage,
  totalPages,
  paginateGoTo,
}: TableViewProps) {
  const { goTo } = useNavigation();
  return (
    <>
      <Table tableHeader={tableHeader} textAlign="left">
        {pokemons &&
          pokemons.map((item: PokemonDto) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.img ? item.img : defaultImg} alt={item.name} />{" "}
                </td>
                <td>{item.name}</td>
                <td>{item.base_experience}</td>
                <td>
                  <div className="actions-content show-icon">
                    <Button onClick={() => goTo(`/pokemon/${item.id}`)}>
                      show detail
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
      </Table>
      <Pagination
        currentPage={currentPage}
        pages={totalPages}
        paginateGoTo={paginateGoTo}
      />
    </>
  );
}
