# [1.0.3] - 2019-08-09
  
Adding a metaObject for monitoring and logs

# [1.0.2] - 2019-07-31
  
Removing dependency on ts-essentials. Plugins that depend on this package now also
need to install @deepstream/protobuf as a dev dependency

```
npm install --save-dev @deepstream/protobuf
```

This is required due to the typescript compilation stage, since the types are bundled
into the same package

# [1.0.1] - 2019-07-31

Attempt as moving all dependencies outside of production to minimize install size

# [1.0.0] - 2019-07-30

Initial release of all custom types used by plugins
