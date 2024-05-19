export default function Feed(props: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gridGap: "5px",
      alignItems: "start",
      justifyContent: "center",
      margin: "20px 40px",
      marginTop: "100px",
    }}>
      {props.children}
    </div>
  )

}
