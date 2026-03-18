import OptionMenuOption from "./OptionMenuOption";

function OptionMenu() {
  return (
    <div className="absolute">
      <span>Option Menu</span>
      <section>
        <OptionMenuOption />
        <OptionMenuOption />
      </section>
    </div>
  );
}

export default OptionMenu;
