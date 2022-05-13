# React Headroomjs
### A wrapper around headroomjs

```
npm install react-headroomjs
```

## How to use
#### Example with Tailwindcss
```react
<HeadRoom
    options={{
      classes: {
        initial: 'fixed w-full top-0 bg-white z-50 transition-all duration-500',
        pinned: 'translate-y-0',
        unpinned: '-translate-y-full bg-blue-300',
        notTop: 'shadow-xl',
      },
    }} >
    <header className="space-y-2 max-w-7xl mx-auto p-2">
      <h1 className="text-6xl tracking-tight font-black bg-clip-text text-transparent bg-gradient-to-b from-primary-600 to-secondary-400">
        REACT<span className="bg-gradient-to-b from-gray-800 to-gray-700 bg-clip-text">HEADROOM</span>JS
      </h1>
      <h3 className="text-gray-400 border-l-4 px-4 ml-1 border-primary-500">
        A wrapper around the very popular
        <strong className=" italic text-gray-500 "> headroom.js</strong> package.
      </h3>
    </header>
</HeadRoom>
```

